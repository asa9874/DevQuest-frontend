import type { MemberResponse } from "../types/MemberResponse";
import apiClient from "./apiClient";

export async function getMyInfo(): Promise<MemberResponse> {
    try {
        const response = await apiClient.get(`/members/me`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}