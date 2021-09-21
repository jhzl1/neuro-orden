import ForJobs from "../pages/ForJobs";
import ForKids from "../pages/ForKids";
import ForYoung from "../pages/ForYoung";
import Home from "../pages/Home";
import TrainingAdvanced from "../pages/TrainingAdvanced";
import TrainingsBasic from "../pages/TrainingBasic";
import { routes } from "./routes";

const {
  home,
  trainingBasic,
  trainingAdvanced,
  trainingYoung,
  trainingKids,
  trainingBusiness,
} = routes;

export const dir = [
  { path: home, component: Home },
  { path: trainingBasic, component: TrainingsBasic },
  { path: trainingAdvanced, component: TrainingAdvanced },
  { path: trainingYoung, component: ForYoung },
  { path: trainingKids, component: ForKids },
  { path: trainingBusiness, component: ForJobs },
];
