export type BuildMode = 'production' | 'development';
export type BuildPath = {
	entry: string;
	build: string;
	html: string;
	src: string;
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPath;
	isDev: boolean;
	port: number;
};
