import { FaSave } from "react-icons/fa";
import useTaskEditForm from "../../hooks/Task/useTaskEditForm";
import { IoMdClose } from "react-icons/io";

export default function TaskEditForm({
  id,
  handleModal,
}: {
  id: string;
  handleModal: () => void;
}) {
  const { form, handleSubmit, handleCancel, handleChange } = useTaskEditForm({
    id,
    handleModal,
  });

  return (
    <dialog open className="rounded-md">
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-between w-full bg-slate-800 py-4 rounded-md gap-x-4  px-2'
      >
      <div className='flex justify-center items-center gap-x-4'>
      <label htmlFor="title" className='text-lg font-semibold text-gray-200'>Title</label>
      <input aria-label='Title task' type="text" name="title" id="title" className='text-lg px-2 rounded-sm py-1 text-black' placeholder='Set Title Task...' onChange={handleChange} />

        </div>
        <div className="flex justify-between gap-x-2">
          <button
            aria-label="Save changes"
            className="bg-emerald-500 hover:bg-emerald-600 p-1 rounded-sm px-2 disabled:bg-zinc-600 disabled:hover:cursor-default"
            disabled={!form.title}
          >
            <FaSave size={20}/>
          </button>
          <button
            aria-label="Cancel changes"
            className="bg-red-600 hover:bg-red-700 p-1 rounded-sm px-2 disabled:bg-zinc-600 transition-colors duration-200 ease-in-out disabled:hover:cursor-default hover:text-red-200"
            onClick={handleCancel}
          >
            <IoMdClose size={20} className="text-white"/>
          </button>
        </div>
      </form>
    </dialog>
  );
}
