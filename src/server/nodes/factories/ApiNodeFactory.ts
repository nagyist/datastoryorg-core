import { DataStoryContext } from "../../DataStoryContext";
import HTTPRequest from "../HTTPRequest";

export class ApiNodeFactory {
	static make(context: DataStoryContext): {} {
		const apis = context.apis
		if(!apis) return {}

		let nodes = {}

		for (let [key, endpoint] of Object.entries(apis)) {			
			let node = new HTTPRequest({
				name: (endpoint as any).name,
				category: 'Workflow',
				description: 'Get API features',
				nodeType: HTTPRequest.name
			})

			node.parameters = node.getDefaultParameters()
			node.setParameterValue('url', (endpoint as any).url)

			nodes[(endpoint as any).name] = node

			console.log("HI", (endpoint as any).name, endpoint)
  	}

		return nodes
	}		
}