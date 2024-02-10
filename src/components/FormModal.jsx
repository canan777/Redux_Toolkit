import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

  //1) formData class'ına prop olarak formumuzu göndeririz.
  // new ile oluşturduğumuz örnek bizim bazı fonksiyonları kullanmamızı sağlar.
  const formData = new FormData(e.target);
    
  //2) inputlardaki verilerden bir obje oluşturur
  const task = Object.fromEntries(formData.entries());

  if(editItem){
  //3) güncellenecek eleman varsa editTask aksiyonunu çalıştır
    dispatch(editTask({ ...task, id: editItem.id }));
  } else {
  //3) yoksa addTask aksiyonunu çalıştır
  dispatch (addTask(task));
  }

  //4) modal'ı kapat
  close();
  }; 

  return (
    <Modal 
    onHide={close} 
    show={isOpen} 
    centered 
    className="text-black"
    >
      {/* Başlık */}
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>

      {/* İçerik */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control 
           defaultValue={editItem?.title}
            name="title" placeholder="Görevi Giriniz" required />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
            defaultValue={editItem?.author}
              name="author"
              placeholder="İsminizi Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Atanan</Form.Label>
            <Form.Control
            defaultValue={editItem?.assigned_to}
              name="assigned_to"
              placeholder="Kime Atadığınızı Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control 
            defaultValue={editItem?.end_date}
            name="end_date" type="date" required />
          </Form.Group>

          {/* Butonlar */}
          <Modal.Footer>
            <Button type="button" onClick={close} variant="secondary">
              Close
            </Button>
            <Button type="submit">Kaydet</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
