import React, { useEffect, useState } from 'react';
import listStore from './stores/list';
import { addRecordAction } from './actions/list';
import List from './components/List';

const App = () => {
  const [records, setRecords] = useState([] as Array<string>);
  const addRecord = (text: string) => {
    addRecordAction(text);
  };

  useEffect(() => {
    listStore.on('change',
      () => setRecords(listStore.getAllRecords()));
    setRecords(listStore.getAllRecords());
  }, []);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => console.log(records)}
      >
        Вывести массив записей
      </button>
      <button
        type="button"
        onClick={() => console.log(listStore.records === records)}
      >
        Проверить соответствие с Store
      </button>
      <button
        type="button"
        onClick={() => console.log(listStore.oldRecords === records)}
      >
        Проверить соответствие со старым Store
      </button>
      <List
        records={records}
        addRecordCallback={addRecord}
      />
    </div>
  );
};
export default App;
