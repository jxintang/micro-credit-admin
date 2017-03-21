import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UserList from '../components/Users/Users';

function Users() {
  return (
    <div className={styles.normal}>
      Route Component: Users

      <UserList />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
