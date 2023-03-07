window.BENCHMARK_DATA = {
  "lastUpdate": 1678210540464,
  "repoUrl": "https://github.com/vincentsarago/pgstac-benchmark",
  "entries": {
    "PgSTAC Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "vincent.sarago@gmail.com",
            "name": "vincentsarago",
            "username": "vincentsarago"
          },
          "committer": {
            "email": "vincent.sarago@gmail.com",
            "name": "vincentsarago",
            "username": "vincentsarago"
          },
          "distinct": true,
          "id": "8fe73211ed2d46e41a6979b6f5384e6e2d707674",
          "message": "push",
          "timestamp": "2023-03-07T18:34:14+01:00",
          "tree_id": "685bb5378e89cdba6fdb717ae84541795035c774",
          "url": "https://github.com/vincentsarago/pgstac-benchmark/commit/8fe73211ed2d46e41a6979b6f5384e6e2d707674"
        },
        "date": 1678210540028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[1]",
            "value": 187.86000448876666,
            "unit": "iter/sec",
            "range": "stddev: 0.00042102166377746197",
            "extra": "mean: 5.32311282926535 msec\nrounds: 41"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[10]",
            "value": 59.043209913993714,
            "unit": "iter/sec",
            "range": "stddev: 0.00036478807224249476",
            "extra": "mean: 16.93674855172452 msec\nrounds: 58"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[50]",
            "value": 13.723730046972722,
            "unit": "iter/sec",
            "range": "stddev: 0.006792960478074307",
            "extra": "mean: 72.86648721428232 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[100]",
            "value": 7.0732316982205345,
            "unit": "iter/sec",
            "range": "stddev: 0.01197911129669299",
            "extra": "mean: 141.3780917499956 msec\nrounds: 8"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[200]",
            "value": 3.63428386918253,
            "unit": "iter/sec",
            "range": "stddev: 0.013236600538213872",
            "extra": "mean: 275.15737240000817 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}