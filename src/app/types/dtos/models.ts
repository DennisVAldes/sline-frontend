export interface ApiResponse<T>{
    status: number;
	statusText: string;
	message: string;
	data?: T;
}

export interface UserDto{
    username: string;
    email: string;
    password: string;
    sexo: string;
    fechaActual?: Date;
    fechaNac?: Date;
    id?: number;
}