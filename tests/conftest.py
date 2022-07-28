"""``pytest`` configuration."""

import os
import psycopg
import pytest
import pytest_pgsql
from pypgstac.db import PgstacDB
from pypgstac.load import Loader
from pypgstac.migrate import Migrate

DATA_DIR = os.path.join(os.path.dirname(__file__), "fixtures")


test_db = pytest_pgsql.TransactedPostgreSQLTestDB.create_fixture(
    "test_db", scope="session", use_restore_state=False
)


@pytest.fixture(scope="session")
def database_url(test_db):
    """
    Session scoped fixture to launch a postgresql database in a separate process.  We use psycopg2 to ingest test data
    because pytest-asyncio event loop is a function scoped fixture and cannot be called within the current scope.  Yields
    a database url which we pass to our application through a monkeypatched environment variable.
    """
    print("Connecting to DB...")
    with PgstacDB(dsn=str(test_db.connection.engine.url)) as db:
        print("Running to PgSTAC migration...")
        migrator = Migrate(db)
        version = migrator.run_migration()
        assert version
        assert test_db.has_schema("pgstac")
        print(f"PgSTAC version: {version}")

        print(f"Load items and collection into PgSTAC")
        loader = Loader(db=db)
        loader.load_collections(os.path.join(DATA_DIR, "collections.json"))
        loader.load_items(os.path.join(DATA_DIR, "items.json"))

    # Make sure we have 1 collection and 8 items in pgstac
    with psycopg.connect(str(test_db.connection.engine.url)) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT COUNT(*) FROM pgstac.collections")
            val = cur.fetchone()[0]
            assert val == 1

            cur.execute("SELECT COUNT(*) FROM pgstac.items")
            val = cur.fetchone()[0]
            assert val == 8

    return test_db.connection.engine.url


@pytest.fixture(scope="session")
def conn(database_url):
    """Create app with connection to the pytest database."""
    with psycopg.connect(str(database_url)) as connection:
        yield connection
