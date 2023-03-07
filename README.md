# pgstac-benchmark


```
$ python -m pytest tests/benchmarks.py --benchmark-only --benchmark-columns 'min, max, mean, median' -s -vv

------------------------------------------- benchmark 'search': 5 tests -------------------------------------------
Name (time in ms)                         Min                 Max                Mean              Median
-------------------------------------------------------------------------------------------------------------------
test_benchmark_search_limit[1]         2.1860 (1.0)        2.5695 (1.0)        2.2634 (1.0)        2.2415 (1.0)
test_benchmark_search_limit[10]        7.4756 (3.42)      10.2599 (3.99)       7.6862 (3.40)       7.5938 (3.39)
test_benchmark_search_limit[50]       29.9347 (13.69)     54.5747 (21.24)     32.1491 (14.20)     30.2613 (13.50)
test_benchmark_search_limit[100]      57.6463 (26.37)     80.8900 (31.48)     60.6693 (26.80)     57.9059 (25.83)
test_benchmark_search_limit[200]     113.5913 (51.96)    136.6592 (53.19)    119.6136 (52.85)    114.7284 (51.18)
-------------------------------------------------------------------------------------------------------------------
```