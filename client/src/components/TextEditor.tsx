import "quill/dist/quill.snow.css";
import "./textEditorStyles.css";
import { useEditor } from "@/hooks/useEditor";

export default function TextEditor() {
  const { wrapperRef } = useEditor();
  // quill appends header to this div which contains buttons to bold, italic etc
  // so this div will contain that header and text editor, to specifically style
  // text editor inside this div we will use css file textEditorStyles.css
  // and quill give class- ql-editor to that div, we will use that
  return (
    <div className="mx-2.5 sm:w-[90%] sm:mx-auto mb-10" ref={wrapperRef}></div>
  );
}
