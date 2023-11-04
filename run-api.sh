# run without tests

curl --silent -i localhost:5000/heroes
# {"results":[{"id":"0373ce78-dff7-4122-ae22-0bb6f278070c","name":"Batman","age":50,"power":"rich"},{"id":"86217f5f-8771-4ab4-9d72-1a936b7cdbb2","name":"Batman","age":50,"power":"rich"}]}

curl \
    --silent \
    -X POST \
    -d '{"name": "Flash", "age": "23","power": "speed"}'  \
    localhost:5000/heroes

# {"id":"859a6740-492e-492e-9fc8-c0b3d75f6e83","success":"User created with successs!!"}

curl \
    --silent \
    -X POST \
    -d '{"invalid json payload"}'  \
    localhost:5000/heroes

# {"error":"internet server error!!"}
