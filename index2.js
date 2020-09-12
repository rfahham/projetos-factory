function createCore() {
	const database = createDatabaseConnection();
	const webserver = createWebserver();

	function start() {
		console.log('> [core] Starting...')
		database.start();
		webserver.start();
		console.log('> [core] Starting done! System running!');
	}

	function stop() {
		console.log('> [core] Stoping...');
		database.start();
		webserver.start();
		console.log('> [core] Stopping done! System stoping!');;
	}

	return {
		start,
		stop
	}

}

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

const core = createCore();

try {
	core.start();
	core.stop();
} catch (error) {
	console.log('[index] Uncaught error!')
	console.log(error);
}