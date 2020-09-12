function createWebserver() {
	
	function start() {
		console.log('> [webserver] Starting ...');
		console.log('> [webserver] Waiting for port to be available ...');
		console.log('> [webserver] Start done!');
	}

	function stop() {
		console.log('> [webserver] Stopping ...');
		console.log('> [webserver] Gracefully Waiting for all clients ...');
		console.log('> [webserver] Closing all ports ...');
		console.log('> [webserver] Stopping done!');
	}

	return {
		start,
		stop
	}
}

export default createWebserver;