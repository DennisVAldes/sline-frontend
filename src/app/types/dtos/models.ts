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
    fecha_registro?: string;
    fecha_nacimiento?: string;
    id?: number;
}

export interface CaseDto {
    id_caso?: number;
    descripcion: string;
    tipo_violencia: string;
    lat: number;
    lng: number;
    id_usuario?: number;
    username?: string;
    fecha_registro?: string;
    verified?: boolean;
}