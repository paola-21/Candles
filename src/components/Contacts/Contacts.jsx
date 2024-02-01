import "./Contacts.css";

function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts_container">
                <h2 className="contacts_title">Контакты</h2>
                <p className="contacts_text">Телефон для связи: +7 999 000 00 00
                Сообщество Вконтакте: https://vk.com/handle_home
                </p>
            </div>
            <div className="contacts_container">
                <h2 className="contacts_title">Доставка и оплата</h2>
                <p className="contacts_text">Оплата по QR-code, на карту Сбербанк, при получении.
                Доставка осуществляется курьером и через Почта России.
                </p>
            </div>
        </div>
  );
}

export default Contacts