import React, { useState } from "react";
import { connect } from "react-redux";
import { reset } from "redux-form";

import Form from "./Form";
import { addUser } from "../../redux/actions/user/add";

export const User = (props: any) => {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    props.dispatch(addUser(values));
    props.dispatch(reset("user"));
  };

  return <Form onSubmit={handleSubmit} isLoading={isLoading} {...props} />;
};

export default connect(null)(User);
