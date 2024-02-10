import { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  const counterState = useSelector((store) => store.counterSlice);
  const crudState = useSelector((store) => store.crudSlice);
  const dispatch = useDispatch ();


  // modal açılacak mı state'i
  const [isOpen, setIsOpen] = useState(false);

  // güncellenecek elemanın state'i
 const [editItem, setEditItem] =useState(null);

  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setIsOpen(true)}>
          Yeni Görev Ekle</Button>
      </Stack>

      {/* Form MODAL'ı */}
      <FormModal 
      isOpen={isOpen}
      editItem={editItem}
       close={()=>{ 
        setIsOpen(false);
        setEditItem(null);
      }}
      />

      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.is_dark_theme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
         {crudState.tasks.map((task, i) =>(
          <tr>
            <td>{i + 1}</td>
            <td>{task.title}</td>
            <td>{task.author}</td>
            <td>{task.assigned_to}</td>
            <td>{task.end_date}</td>
            <td>
              <ButtonGroup size="sm">
                <Button 
                onClick={() => dispatch(deleteTask(task.id))}
                variant="danger">
                Sil
                </Button>
                <Button onClick={()=>{
                  setEditItem(task);
                  setIsOpen(true);
                }}>Düzenle</Button>
              </ButtonGroup>
            </td>
          </tr>
         ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
