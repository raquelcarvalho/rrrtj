//verificar os dados que estamos recebendo da ação redux e os dados que são armazenados no redutor são os mesmos.

import userReducer from "../../../src/redux/reducers/user";
import { userAddResponse } from "../../fixtures/User/UserData";

describe("users reducer", () => {
  it("users  reducer expected state", () => {
    const action = {
      payload: userAddResponse,
      type: "ADD_USER",
    };

    const updatedState = userReducer(undefined, action);

    expect(updatedState.data).toHaveLength(1);
    expect(updatedState.data).toEqual([userAddResponse]);
  });
});
