/**
 * Local RD Manager : Resolvers & Defaults
 */
import { merge } from 'lodash'
import SIDE_BAR_RD from './resolvers-defaults/SIDE_BAR_RD'

// merge all resolvers
const LocalRDManager = merge(
  SIDE_BAR_RD,
)

export default LocalRDManager
