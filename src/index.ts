import { app } from "./app"
import { EndpointCreateCompetition } from "./endpoints/EndpointCreateCompetition"

app.post("/competition", new EndpointCreateCompetition().createCompetition)