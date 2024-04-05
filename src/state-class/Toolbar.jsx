import {Component} from 'react';

class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;

    return (
      <div>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => onSelectFilter(filter)}
            style={{ fontWeight: selected === filter ? 'bold' : 'normal' }}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
}

export default Toolbar;