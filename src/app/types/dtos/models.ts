export interface ApiResponse<T>{
    status: number;
	statusText: string;
	message: string;
    data?: T;
    token?: string
}

export interface UserDto {
    username: string;
    email: string;
    password: string;
    sexo: string;
    fecharegistro?: string;
    fechanac?: string;
    id?: number;
}

export interface CaseDto {
    id?: number;
    descripcion: string;
    coordenadas: {"lat": number, "long": number};
    idUsuario?: number;
    username?: string;
    fechaRegistro?: string;
    verified?: boolean;
}