import CodeBlock from "./CodeBlock";

function CreateNoteCodeBlock() {
  return (
    <CodeBlock title="notes.ts" className="scale-90">
      <div className="font-jet-brains-mono">
        <span className="text-[#C678DD]">export const </span>
        <span className="text-[#61AFEF]">createNote {"="} </span>
        <span className="text-[#C678DD]">async</span>
        <span className="text-[#D19A66]">{" ("}</span>
        <br />
        <p className="pl-6">
          <span className="text-[#E06C75]">req</span>
          <span className="text-white">{":"} </span>
          <span className="text-[#E5C07B]">Request</span>
          <span className="text-[#C678DD]">{"<"}</span>
          <span className="text-[#56B6C2]">{"{}"}</span>
          <span className="text-white">{", "}</span>
          <span className="text-[#56B6C2]">{"{}"}</span>
          <span className="text-white">{", "}</span>
          <span className="text-[#E5C07B]">Note</span>
          <span className="text-white">{" & "}</span>
          <span className="text-[#56B6C2]">{"{ "}</span>
          <span className="text-[#E06C75]">tags</span>
          <span className="text-white">{": "}</span>
          <span className="text-[#E5C07B]">Tag</span>
          <span className="text-[#D19A66]">{"[]"}</span>
          <span className="text-[#56B6C2]">{" }"}</span>
          <span className="text-[#C678DD]">{">"}</span>
          <span className="text-white">{","}</span>
          <br />
          <span className="text-[#E06C75]">res</span>
          <span className="text-white">{": "}</span>
          <span className="text-[#E5C07B]">Response</span>
          <span className="text-white">{","}</span>
          <br />
          <span className="text-[#61AFEF]">next</span>
        </p>
        <span className="text-[#D19A66]">{") "}</span>
        <span className="text-[#C678DD]">{"=> "}</span>
        <span className="text-[#D19A66]">{"{"}</span>
        <br />
        <p className="pl-6">
          <span className="text-[#C678DD]">const </span>
          <span className="text-[#E5C07B]">user</span>
          <span className="text-[#56B6C2]">{" = "}</span>
          <span className="text-[#E06C75]">req</span>
          <span className="text-white">{"."}</span>
          <span className="text-[#E06C75]">locals</span>
          <span className="text-white">{"."}</span>
          <span className="text-[#E06C75]">user</span>
          <span className="text-[#C678DD]"> as </span>
          <span className="text-[#E5C07B]">Omit</span>
          <span className="text-[#C678DD]">{"<"}</span>
          <span className="text-[#E5C07B]">User</span>
          <span className="text-white">{", "}</span>
          <span className="text-[#98C379]">{'"id"'}</span>
          <span className="text-[#C678DD]">{">"}</span>
          <span className="text-white">{" & "}</span>
          <br />
          <span className="text-[#E5C07B]">Required</span>
          <span className="text-[#C678DD]">{"< "}</span>
          <span className="text-[#E5C07B]">Pick</span>
          <span className="text-[#56B6C2]">{"<"}</span>
          <span className="text-[#E5C07B]">User</span>
          <span className="text-white">{", "}</span>
          <span className="text-[#98C379]">{'"id"'}</span>
          <span className="text-[#56B6C2]">{">"}</span>

          <span className="text-[#C678DD]">{" >"}</span>
          <span className="text-white">{";"}</span>
        </p>
        <p className="pl-6 py-4">
          <span className="text-[#C678DD]">const {"{"}</span>
          <span className="text-[#E5C07B]">{" title, description, tags "}</span>
          <span className="text-[#C678DD]">{"}"}</span>
          <span className="text-[#56B6C2]">{" = "}</span>

          <span className="text-[#E06C75]">req</span>
          <span className="text-white">{"."}</span>
          <span className="text-[#E06C75]">body</span>
          <span className="text-white">{";"}</span>
        </p>
        <div className="pl-6">
          <span className="text-[#C678DD]">try {"{"}</span>
          <br />
          <p className="pl-4">
            <span className="text-[#C678DD]">const </span>
            <span className="text-[#E5C07B]">notesQuery</span>
            <span className="text-[#56B6C2]">{" = "}</span>
            <span className="text-[#C678DD]">await </span>
            <span className="text-[#E5C07B]">pool</span>
            <span className="text-white">{"."}</span>
            <span className="text-[#61AFEF]">query</span>
            <span className="text-[#56B6C2]">{"("}</span>
            <br />
            <span className="text-[#98C379] pl-4">
              {'"'}
              INSERT INTO notes {"("} title, description, user_id {")"}
            </span>
            <br />
            <span className="text-[#98C379] pl-6">
              VALUES {"( $1, $2, $3 )"}
            </span>
            <br />
            <span className="text-[#98C379] pl-6">RETUTRN {'*"'}</span>
            <span className="text-white">{","}</span>
          </p>
          <p className="pl-8">
            <span className="text-[#D19A66]">{"["}</span>
            <span className="text-[#E5C07B]">title</span>
            <span className="text-white">{", "}</span>
            <span className="text-[#E5C07B]">description</span>
            <span className="text-white">{", "}</span>
            <span className="text-[#E5C07B]">user</span>
            <span className="text-white">{"."}</span>
            <span className="text-[#E06C75]">id</span>
            <span className="text-[#D19A66]">{"]"}</span>
          </p>
          <p className="pl-4">
            <span className="text-[#56B6C2]">{")"}</span>
            <span className="text-white">{";"}</span>
          </p>
          <br />
          <div className="pl-4">
            <p>
              <span className="text-[#C678DD]">const </span>
              <span className="text-[#E5C07B]">tagsQuery</span>
              <span className="text-[#56B6C2]">{" = "}</span>
              <span className="text-[#C678DD]">await </span>
              <span className="text-[#E5C07B]">Promise</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#61AFEF]">all</span>
              <span className="text-[#56B6C2]">{"("}</span>
            </p>
            <div className="pl-4">
              <p>
                <span className="text-[#E5C07B]">tags</span>
                <span className="text-white">{"."}</span>
                <span className="text-[#61AFEF]">map</span>
                <span className="text-[#D19A66]">{"("}</span>
                <span className="text-[#C678DD]">async {"("}</span>
                <span className="text-[#E06C75]">tag</span>
                <span className="text-[#C678DD]">{") => {"}</span>
              </p>
              <div className="pl-4">
                <p>
                  <span className="text-[#C678DD]">const </span>
                  <span className="text-[#E5C07B]">tagQuery</span>
                  <span className="text-[#56B6C2]">{" = "}</span>
                  <span className="text-[#C678DD]">await </span>
                  <span className="text-[#E5C07B]">pool</span>
                  <span className="text-white">{"."}</span>
                  <span className="text-[#61AFEF]">query</span>
                  <span className="text-[#56B6C2]">{"("}</span>
                </p>
                <p className="pl-4">
                  <span className="text-[#98C379]">
                    {'"SELECT * FROM tags WHERE name = $1'}
                  </span>
                  <span className="text-white">{","}</span>
                  <br />
                  <span className="text-[#D19A66]">{"["}</span>
                  <span className="text-[#E06C75]">tag</span>
                  <span className="text-white">{"."}</span>
                  <span className="text-[#E06C75]">name</span>
                  <span className="text-[#D19A66]">{"]"}</span>
                  <br />
                </p>
                <span className="text-[#56B6C2]">{")"}</span>
                <span className="text-white">{";"}</span>
                <p>
                  <span className="text-[#C678DD]">return </span>
                  <span className="text-[#E5C07B]">tagQuery</span>
                  <span className="text-white">{"."}</span>
                  <span className="text-[#E06C75]">rows</span>
                  <span className="text-[#56B6C2]">{"["}</span>
                  <span className="text-[#E5C07B]">{"0"}</span>
                  <span className="text-[#56B6C2]">{"]"}</span>
                  <span className="text-white">{";"}</span>
                </p>
              </div>
              <span className="text-[#D19A66]">{")"}</span>
              <span className="text-white">{";"}</span>
            </div>
            <p className="">
              <span className="text-[#E06C75]">req</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#E06C75]">locals</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#E06C75]">data</span>
              <span className="text-[#56B6C2]">{" = { "}</span>
              <span className="text-white">{"..."}</span>
              <span className="text-[#E5C07B]">noteQuery</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#E06C75]">rows</span>
              <span className="text-[#E5C07B]">{"[0]"}</span>
              <span className="text-white">{", "}</span>
              <span className="text-[#E06C75]">tags</span>
              <span className="text-white">{": "}</span>
              <span className="text-[#E5C07B]">tagsQuery</span>
              <span className="text-[#56B6C2]">{"}"}</span>
              <span className="text-white">{";"}</span>
              <p>
                <span className="text-[#61AFEF]">next{"()"}</span>
                <span className="text-white">{";"}</span>
              </p>
            </p>
          </div>
          <div>
            <p>
              <span className="text-[#C678DD]">{"} catch ("}</span>
              <span className="text-[#E06C75]">error</span>
              <span className="text-[#C678DD]">{") {"}</span>
            </p>
            <p className="pl-4">
              <span className="text-[#E5C07B]">console</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#61AFEF]">log</span>
              <span className="text-[#56B6C2]">{"("}</span>
              <span className="text-[#98C379]">
                {'"FAILED TO CREATE NOTE"'}
              </span>
              <span className="text-[#56B6C2]">{")"}</span>
              <span className="text-white">{";"}</span>
            </p>
            <p className="pl-4">
              <span className="text-[#E06C75]">res</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#61AFEF]">status</span>
              <span className="text-[#56B6C2]">{"("}</span>
              <span className="text-[#E5C07B]">500</span>
              <span className="text-[#56B6C2]">{")"}</span>
              <span className="text-white">{"."}</span>
              <span className="text-[#61AFEF]">json</span>
              <span className="text-[#56B6C2]">{"("}</span>
              <span className="text-[#E5C07B]">{"{"}</span>
              <span className="text-[#E06C75]"> error </span>
              <span className="text-[#E5C07B]">{"}"}</span>
              <span className="text-[#56B6C2]">{")"}</span>
              <span className="text-white">{";"}</span>
            </p>
          </div>
          <span className="text-[#C678DD]">{"}"}</span>
        </div>
      </div>
    </CodeBlock>
  );
}

export default CreateNoteCodeBlock;
