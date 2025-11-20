import { PositionLegend } from "../chart-types";

export interface DonutEntry {
    label: string;
    value: number;
}

export interface DonutOptions {
    ListEntries: DonutEntry[];
    positionLegend?: PositionLegend;
    titleChart?: string | null;
}