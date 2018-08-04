import React from 'react';

import Table from '../../content/content_table.jsx';
import Badge from '../../content/content_badge.jsx';
import ProgressBar from '../../content/content_progress_bar.jsx';

export default class ExamplePageDeltaTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const legend = [[40, 'yellow'], [60, 'blue'], [100, 'green']];

    const head = [{label: '#', size: 10}, 'Name', 'Time', 'Progress', {label: 'Done', size: '40'}];
    const body = [
      [1, 'Task One', 'Now', <ProgressBar value={100} color="red" legend={legend} />, <Badge value={100} color="red" legend={legend} />],
      [2, 'Task Two', 'Now', <ProgressBar value={70} color="red" legend={legend} active={true} />, <Badge value={70} color="red" legend={legend} />],
      [3, 'Task Three', 'Now', <ProgressBar value={50} color="red" legend={legend} active={true} />, <Badge value={50} color="red" legend={legend} />],
      [4, 'Task Four', 'Now', <ProgressBar value={10} color="red" legend={legend} />, <Badge value={10} color="red" legend={legend} />],
    ];

    return (
      <div>
        <h4 className="page-header">Delta Tab</h4>

        <Table head={head} body={body} />
      </div>
    );
  }
}