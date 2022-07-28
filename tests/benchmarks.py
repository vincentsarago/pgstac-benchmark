"""Benchmark items."""

import json
import pytest


@pytest.mark.parametrize("limit", [1, 10, 50, 100, 200])
def test_benchmark_search_limit(benchmark, limit, conn):
    """Benchmark search endpoint."""
    def f(l):
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM pgstac.search(%s::text::jsonb)", (json.dumps({"limit": l}),))
            val = cur.fetchall()[0]
            assert len(val[0]["features"]) == l
            return True

    benchmark.group = "search"

    response = benchmark(f, limit)
