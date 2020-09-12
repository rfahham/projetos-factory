function createDatabaseConnection() {
	
	function start() {
		console.log('> [database] Starting ...');
		console.log('> [database] Connecting to Postgress ...');
		console.log('> [database] Running migrations');
		console.log('> [database] Start done!');
	}

	function stop() {
		console.log('> [database] Stopping ...');
		console.log('> [database] Closing Postgress Connection ...');
		console.log('> [database] Stopping done!');
	}

	return {
		start,
		stop
	}
}

export default createDatabaseConnection;