export type Phase = "PRE_LAUNCH" | "LAUNCH" | "POST_LAUNCH" | "FUTURE";
export type Status = "PLANNED" | "IN_PROGRESS" | "COMPLETED";

export interface RoadmapEventItemData {
	id: number;
	title: string;
	completed: boolean;
	category?: string;
	roadmapEventId?: number;
	createdAt: string;
	updatedAt: string;
}

export interface RoadmapEventData {
	id: number;
	phase: Phase;
	status: Status;
	items: Array<RoadmapEventItemData>;
	createdAt: string;
	updatedAt: string;
}

export type RoadmapEventItem = Pick<
	RoadmapEventItemData,
	"title" | "completed" | "category"
>;

export type RoadmapEvent = Pick<RoadmapEventData, "phase" | "status"> & {
	items?: Array<RoadmapEventItem>;
};
