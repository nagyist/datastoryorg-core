import { spawn } from 'child_process';

/** SPAWN A CHILD PROCESS AND CAPTURE STDOUT AND STDERR */
export const spawnChild = async (command, arguments_, options) => {
	const child = spawn(command, arguments_, options);

	let data = "";
	for await (const chunk of child.stdout) {
			console.log('stdout chunk: '+chunk);
			data += chunk;
	}
	let error = "";
	for await (const chunk of child.stderr) {
			console.error('stderr chunk: '+chunk);
			error += chunk;
	}
	const exitCode = await new Promise( (resolve, reject) => {
			child.on('close', resolve);
	});

	if( exitCode) {
			throw new Error( `subprocess error exit ${exitCode}, ${error}`);
	}
	return data;
}