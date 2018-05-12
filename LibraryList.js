//Importing Libraries from React Native and My Other Components
import React, { Component } from 'react';
import { connect, createStore, CombinedReducers} from 'react-redux';
import ListView from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2 });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;

  }

  render() {
    return (
      <ListView
      DataSource={this.dataSource}
      renderRow={this.renderRow}
      />
    );
  }
}
//This just renders the row of the library as healp to the search page

const mapStateToProps = state => {
  return { libraries: state.libraries };

};

export default connect(mapStateToProps)(LibraryList);
