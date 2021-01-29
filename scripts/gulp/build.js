import { series } from "./gulp";

import clean from "./clean";
import copy from "./copy";
import pack from "./pack";

export default series(clean, copy, pack);
