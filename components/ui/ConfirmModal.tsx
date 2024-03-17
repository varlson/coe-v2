import { DefaultModalProps } from "@/types/types";
import Button from "./Button";

function ConfirmModal({ isOpen, setIsOpen }: DefaultModalProps) {
  const closHandle = () => {
    setIsOpen();
  };

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center">
      <div
        onClick={() => {}}
        id="modal-bg"
        className={` opacity-50 bg-blacks absolute inset-0 `}
      ></div>
      <div id="wrap" className={`z-50 shadow-md  relative w-4/12 bg-white p-2`}>
        <div className="">
          <p className="text-center p-2 ">Deseja apagar ?</p>
        </div>

        <div className="flex gap-x-5 border-t mt-3 pt-3 pb-1 justify-end">
          <Button
            color="bg-slate-700"
            btnClickHandle={closHandle}
            label="Cancelar"
          />
          <Button color="bg-red-600" label="Apagar" />
        </div>
      </div>
    </div>
  );
}
export default ConfirmModal;
