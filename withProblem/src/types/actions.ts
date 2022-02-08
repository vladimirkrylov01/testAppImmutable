export interface ActionType {
  type: string;
}

export interface AddRecordActionType extends ActionType {
  payload: string;
}
