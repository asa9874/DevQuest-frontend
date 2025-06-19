import type { Member } from "../types/Member";
import apiClient from "./apiClient";

export async function getMyInfo(): Promise<Member> {
    try {
        const response = await apiClient.get(`/members`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}