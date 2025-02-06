import { useConfirmDialog } from "../../hooks/useConfirmDialog";

export const Navbar = () => {

  const {confirm} = useConfirmDialog();

  const onclick = async() => {
    if(await confirm()) {
      alert("YES");
    }
  }
  return (
    <nav className="w-full p-5 flex justify-between bg-green-400">
      <div>Home</div>
      <div>Main</div>
      <div>Catalog</div>
      <div>Exit</div>

      <button onClick={onclick}>test</button>
    </nav>
  );
};
