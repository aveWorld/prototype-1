import React, { useState } from 'react';
import { nanoid } from 'nanoid';

// Styles
import { Dropdown, Nav } from 'react-bootstrap';

export default function Home() {
  const initialState = { maxPrice: 'Max Price', maxSpeed: 'Max Speed', strategy: 'Strategy' };
  const [blockData, setBlockData] = useState(initialState);
  const [tabsData, setTabsData] = useState('Orders');
  const [fieldError, setFieldError] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleField = (event, fieldName) => {
    const currentValue = event.currentTarget.innerText;
    setBlockData((prev) => {
      prev[fieldName] = currentValue;
      return { ...prev };
    });
  };

  const addRow = () => {
    if (Object.values(blockData).indexOf('') === -1) {
      setFieldError(false);
      setBlockData(initialState);
      setFormData((prev) => [...prev, blockData]);
    } else {
      setFieldError(true);
    }
  };

  const removeRow = (index) => {
    setFormData((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <main className="container main-page">
      <Nav
        variant="tabs"
        defaultActiveKey="orders"
        onSelect={(_, event) => setTabsData(event.currentTarget.innerText)}
      >
        <Nav.Item>
          <Nav.Link eventKey="orders">Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="factors">Factors</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="strategy">Strategy</Nav.Link>
        </Nav.Item>
      </Nav>
      {tabsData === 'Orders' ? (
        <div className="form">
          {formData.map((item, index) => (
            <div className="form__item" key={nanoid()}>
              <span>Max Price : {item.maxPrice}</span>
              <span>Max Speed : {item.maxSpeed}</span>
              <span>Strategy : {item.strategy}</span>
              <button type="button" onClick={() => removeRow(index)} className="btn btn-danger">
                delete
              </button>
            </div>
          ))}
          <button onClick={addRow} type="button" className="btn btn-primary add-row__btn">
            Create Order
          </button>
          <div className="form__block">
            <Dropdown onSelect={(_, event) => handleField(event, 'maxPrice')}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {blockData.maxPrice}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {fieldError && !blockData.maxPrice.length && (
              <span className="error-span ">Required</span>
            )}
            <Dropdown onSelect={(_, event) => handleField(event, 'maxSpeed')}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {blockData.maxSpeed}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {fieldError && !blockData.maxSpeed.length && (
              <span className="error-span">Required</span>
            )}
            <Dropdown onSelect={(_, event) => handleField(event, 'strategy')}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {blockData.strategy}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {fieldError && !blockData.strategy.length && (
              <span className="error-span">Required</span>
            )}
          </div>
        </div>
      ) : (
        <div>empty here</div>
      )}
    </main>
  );
}
