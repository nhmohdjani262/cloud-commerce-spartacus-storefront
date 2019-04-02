import { UPDATE_PASSWORD_PROCESS_ID } from '../user-state';
import {
  EntityFailAction,
  EntityLoadAction,
  EntityResetAction,
  EntitySuccessAction,
} from '../../../state';
import { PROCESS_FEATURE } from '../../../process/store/process-state';

export const UPDATE_PASSWORD = '[User] Update Password';
export const UPDATE_PASSWORD_FAIL = '[User] Update Password Fail';
export const UPDATE_PASSWORD_SUCCESS = '[User] Update Password Success';
export const UPDATE_PASSWORD_RESET =
  '[User] Reset Update Password Process State';

export class UpdatePassword extends EntityLoadAction {
  readonly type = UPDATE_PASSWORD;
  constructor(
    public payload: { userId: string; oldPassword: string; newPassword: string }
  ) {
    super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
  }
}

export class UpdatePasswordFail extends EntityFailAction {
  readonly type = UPDATE_PASSWORD_FAIL;
  constructor(public payload: any) {
    super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID, payload);
  }
}

export class UpdatePasswordSuccess extends EntitySuccessAction {
  readonly type = UPDATE_PASSWORD_SUCCESS;
  constructor() {
    super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
  }
}

export class UpdatePasswordReset extends EntityResetAction {
  readonly type = UPDATE_PASSWORD_RESET;
  constructor() {
    super(PROCESS_FEATURE, UPDATE_PASSWORD_PROCESS_ID);
  }
}

// action types
export type UpdatePasswordAction =
  | UpdatePassword
  | UpdatePasswordFail
  | UpdatePasswordSuccess
  | UpdatePasswordReset;
