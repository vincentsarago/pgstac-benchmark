"""test db."""

def test_db(conn):
    with conn.cursor() as cur:
        cur.execute("SELECT COUNT(*) FROM pgstac.collections")
        val = cur.fetchone()[0]
        assert val == 1

        cur.execute("SELECT COUNT(*) FROM pgstac.items")
        val = cur.fetchone()[0]
        assert val == 8
