import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  buyMobile,
  sellMobile,
  getAllUsers,
  getSingleUser,
  addUser,
  editUser,
  deleteUser
} from "../redux/actions/mobile-action";

const MobileDetails = ({
  buyMobile,
  sellMobile,
  numOfMobiles,
  users,
  user,
  getSingleUser,
  getAllUsers,
  addUser,
  editUser,
  deleteUser
}) => {
  const Styles = {
    btn: {
      padding: 25,
      margin: 10,
      borderRadius: 10,
      border: 0
    }
  };

  return (
    <div>
      <h1>
        Number of Mobiles {numOfMobiles} and User {users.length} UserDetails{" "}
        {user.name}
      </h1>
      <button style={Styles.btn} onClick={() => buyMobile()}>
        Buy
      </button>
      <button style={Styles.btn} onClick={() => sellMobile()}>
        Sell
      </button>
      <button style={Styles.btn} onClick={() => getAllUsers()}>
        Get All Users
      </button>

      <button style={Styles.btn} onClick={() => getSingleUser(2)}>
        Get Single Users
      </button>

      <button style={Styles.btn} onClick={() => addUser()}>
        Add User
      </button>

      <button style={Styles.btn} onClick={() => editUser({ name: "Teja" }, 7)}>
        Edit
      </button>
      <button style={Styles.btn} onClick={() => deleteUser(1)}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfMobiles: state.numOfMobiles,
    users: state.users,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllUsers,
      getSingleUser,
      addUser,
      editUser,
      deleteUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
