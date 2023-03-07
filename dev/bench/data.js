window.BENCHMARK_DATA = {
  "lastUpdate": 1678213959968,
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
      },
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
          "id": "aa636e05ad0cc5316ed0df6fa4b61ce630841fe1",
          "message": "try 0.6.13",
          "timestamp": "2023-03-07T19:21:28+01:00",
          "tree_id": "1590c0062ad38d3dcb866177a73e69c563453ac0",
          "url": "https://github.com/vincentsarago/pgstac-benchmark/commit/aa636e05ad0cc5316ed0df6fa4b61ce630841fe1"
        },
        "date": 1678213372839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[1]",
            "value": 186.39388509757543,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468816962318635",
            "extra": "mean: 5.364982866667055 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[10]",
            "value": 56.830728664476005,
            "unit": "iter/sec",
            "range": "stddev: 0.0002474454680809168",
            "extra": "mean: 17.596114346939284 msec\nrounds: 49"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[50]",
            "value": 13.368482039144897,
            "unit": "iter/sec",
            "range": "stddev: 0.00790752659816153",
            "extra": "mean: 74.80280835713822 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[100]",
            "value": 7.032786956525078,
            "unit": "iter/sec",
            "range": "stddev: 0.011555073422248993",
            "extra": "mean: 142.19114074999695 msec\nrounds: 8"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[200]",
            "value": 3.5630084291886317,
            "unit": "iter/sec",
            "range": "stddev: 0.014196026163306986",
            "extra": "mean: 280.6616991999988 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "e9f48ee306a2d8d2fd1adfaa6245a0398cbbd320",
          "message": "0.7.1",
          "timestamp": "2023-03-07T19:31:14+01:00",
          "tree_id": "685bb5378e89cdba6fdb717ae84541795035c774",
          "url": "https://github.com/vincentsarago/pgstac-benchmark/commit/e9f48ee306a2d8d2fd1adfaa6245a0398cbbd320"
        },
        "date": 1678213959532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[1]",
            "value": 182.9199031434785,
            "unit": "iter/sec",
            "range": "stddev: 0.00040508966945123644",
            "extra": "mean: 5.466873657896163 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[10]",
            "value": 54.626053687506385,
            "unit": "iter/sec",
            "range": "stddev: 0.00048425107096194476",
            "extra": "mean: 18.306283037039368 msec\nrounds: 54"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[50]",
            "value": 12.473933437191567,
            "unit": "iter/sec",
            "range": "stddev: 0.01214606866664783",
            "extra": "mean: 80.16717461538292 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[100]",
            "value": 6.6595830267623715,
            "unit": "iter/sec",
            "range": "stddev: 0.016729916227306366",
            "extra": "mean: 150.15955142857658 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_search_limit[200]",
            "value": 3.33025141210842,
            "unit": "iter/sec",
            "range": "stddev: 0.01950284898147097",
            "extra": "mean: 300.2776296000093 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}