```
                    ┌────────────┐      ┌────────────┐
                    │  DevServer │      │  Browser   │
                    │            │      │            │
                    localhost:5000 ───▶ localhost:5000
```

sdsd

```
                    ┌────────────┐
                    │ Functions  │
                    │            │
                    localhost:9999
                            │
                            ▼
                    ┌────────────┐      ┌────────────┐
                    │  DevServer │      │  Browser   │
                    │            │      │            │
                    localhost:5000 ───▶ localhost:5000
```

sdsd

```
                            ┌───────────────┐
                            │   DevServer   │
                            │               │
                            └localhost:5000─┘
                                    │
                                    │
       ┌──────────┐                 │
       │ Functions├────┐            ▼
       └──────────┘    │    ┌localhost:5000─┐     ┌──────────────┐
       ┌──────────┐    └───▶│               │     │              │
       │_redirects├────────▶│    Netlify    │     │   Browser    │
       └──────────┘    ┌───▶│      Dev      │     │              │
       ┌──────────┐    │    │               │     │              │
       │ env vars │────┘    └──localhost:8888───▶ localhost:8888─┘
       └──────────┘
```
