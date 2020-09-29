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
    idcaso?: number;
    descripcion: string;
    tipoviolencia: string;
    lat: number;
    lng: number;
    idusuario?: number;
    username?: string;
    fecharegistro?: string;
    verified?: boolean;
}