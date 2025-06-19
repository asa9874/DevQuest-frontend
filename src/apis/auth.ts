import type { AuthToken } from "../types/AuthToken";
import apiClient from "./apiClient";

export async function loginMember(memberData: { email: string; password: string }): Promise<AuthToken> {
    try {
        const response = await apiClient.post(`/auth/login`, memberData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function registerMember(memberData: { email: string; name: string; password: string }): Promise<AuthToken> {
    try {
        const response = await apiClient.post(`/auth/register`, memberData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}