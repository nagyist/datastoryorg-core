// import { DiagramBuilder } from "./../DiagramBuilder";
import {
  CreateAttribute,
  Clone_,
  Create,
  CreateGrid,
  CreateJSON,
  // DownloadJSON,
  // DownloadGeoJSON,
  Evaluate,
  Flatten,
  // HTTPRequest,
  Inspect,
  Map,
  Log,
  FilterDuplicates,
  CreateSequence,
  // Aggregate,
} from './nodes';

// import Aggregate from "./nodes/Aggregate";

// export const playing_with_json = DiagramBuilder.begin()
// 	.add(Create, {feature_type: 'object', contents: '{}'})
// 	.add(CreateAttribute, {attribute: 'resource', value: 'todos'})
// 	.add(Clone_, {number_of_clones: 3})
// 	.add(HTTPRequest)
// 	.add(Inspect)
// 	.add(Inspect)
// 	.add(Inspect)
// 	.finish()

// // export const cleanup_old_github_repos = DiagramBuilder.begin()
// // 	.add(HTTPRequest)
// // 	.finish()

// // // Södermalm
// // grid_min_x: 18.01826477050781,
// // grid_min_y: 59.29674702504426,
// // grid_max_x: 18.116455078125,
// // grid_max_y: 59.32618430580267,

// // // Greater Stockholm area
// // grid_min_x: 17.782745361328125,
// // grid_min_y: 59.2163658770415,
// // grid_max_x: 18.30665588378906,
// // grid_max_y: 59.41853568293486,

// export const scraping_a_map_service = DiagramBuilder.begin()
// 	.add(CreateGrid, {
// 		grid_type: 'boxes',
// 		grid_min_x: 18.01826477050781,
// 		grid_min_y: 59.29674702504426,
// 		grid_max_x: '',
// 		grid_max_y: '',
// 		grid_size_x: 2,
// 		grid_size_y: 2,
// 		// Trial and error approxiamtes something like 1000 x 1000 meters
// 		grid_spacing_x: 0.00437431579,
// 		grid_spacing_y: 0.00975251197,
// 	})
// 	.add(HTTPRequest, {
// 		url: 'https://layers.enirocdn.com/{{ feature.y_min }}/{{ feature.x_min }}/{{ feature.y_max }}/{{ feature.x_max }}/17/se_realestate.json',
// 		features_path: 'data.se_realestate'
// 	})
// 	.add(FilterDuplicates, { attribute: 'properties.gid'})
// 	.add(DownloadGeoJSON, { filename: 'realestates_sthlm.json'})
// 	// .add(Inspect)
// 	// .add(Log)
// 	.finish()

// export const grouping = DiagramBuilder.begin()
// 	.add(Create)
// 	.add(HTTPRequest, {
// 		url: 'https://api.sheety.co/5daeb7a966361cbf4030212dc3045cd9/fakeData/sheet1',
// 		features_path: 'data.sheet1',
// 	})
// 	.add(Aggregate, {'group_by': 'date'})
// 	.add(Inspect)
// 	.finish()
