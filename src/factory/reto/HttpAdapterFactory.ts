export abstract class HttpsAdapter {
	public adapter: string;

	public constructor(adapter: string) {
		this.adapter = adapter;
	}

	public abstract get(): void;
	public abstract post(): void;
	public abstract put(): void;
	public abstract delete(): void;
}

interface HttpAdapterFactory {
	makeAdapter(): HttpsAdapter;
}

export class RestHttpAdapter extends HttpsAdapter {
	constructor() {
		super('REST');
	}

	public get(): void {}
	public post(): void {}
	public put(): void {}
	public delete(): void {}
}

export class RestHttpAdapterFactory implements HttpAdapterFactory {
	makeAdapter(): HttpsAdapter {
		return new RestHttpAdapter();
	}
}
