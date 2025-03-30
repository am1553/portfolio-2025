import CodeBlock from "./CodeBlock";

function Database() {
  return (
    <CodeBlock title="database.sql" className="">
      <div>
        <p>
          <span className="text-[#C678DD]">CREATE</span>
          <span className="text-[#56B6C2]"> DATABASE </span>
          <span className="text-white">noteapp {";"}</span>
        </p>
        <p>
          <span className="text-[#C678DD]">CREATE EXTENSION</span>
          <span className="text-[#56B6C2]"> IF </span>
          <span className="text-[#C678DD]">NOT EXISTS </span>
          <span className="text-[#98C379]">{'"uuid-ossp"'}</span>
          <span className="text-white">{";"}</span>
        </p>
        <p>
          <span className="text-[#C678DD]">SELECT</span>
          <span className="text-white"> uuid_generate_v4</span>
          <span className="text-[#E5C07B]">{"( )"}</span>
          <span className="text-white">{";"}</span>
        </p>
        <br />
        <p>
          <span className="text-[#C678DD]">CREATE TABLE</span>
          <span className="text-white"> notes </span>
          <span className="text-[#E5C07B]">{"("}</span>
        </p>
        <p className="pl-4">
          <span className="text-[#C678DD]">id </span>
          <span className="text-[#56B6C2]">uuid </span>
          <span className="text-[#C678DD]">DEFAULT </span>
          <span className="text-white">uuid_generate_v4 </span>
          <span className="text-[#C678DD]">{"( )"}</span>
          <span className="text-[#C678DD]"> PRIMARY KEY</span>
          <span className="text-white">{","}</span>
        </p>
        <p className="pl-4">
          <span className="text-white">title </span>
          <span className="text-[#C678DD]">VARCHAR{"("}</span>
          <span className="text-[#E5C07B]">255</span>
          <span className="text-[#C678DD]">{")"} </span>
          <span className="text-[#C678DD]">NOT NULL </span>
          <span className="text-white">{","}</span>
        </p>
        <p className="pl-4">
          <span className="text-[#C678DD]">description TEXT</span>
          <span className="text-white">{","}</span>
        </p>
        <p className="pl-4">
          <span className="text-white">is_archived </span>
          <span className="text-[#C678DD]">BOOLEAN DEFAULT false</span>
          <span className="text-white">{","}</span>
        </p>
        <p className="pl-4">
          <span className="text-white">created_at </span>
          <span className="text-[#C678DD]">
            TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          </span>
          <span className="text-white">{","}</span>
        </p>
        <p className="pl-4">
          <span className="text-white">updated_at </span>
          <span className="text-[#C678DD]">
            TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          </span>
          <span className="text-white">{","}</span>
        </p>
        <p className="pl-4">
          <span className="text-[#56B6C2]">user_id UUID </span>
          <span className="text-[#C678DD]">REFERENCES </span>
          <span className="text-white">users </span>
          <span className="text-[#C678DD]">
            {"(id)"} ON DELETE CASCADE NOT NULL
          </span>
        </p>
        <p>
          <span className="text-[#E5C07B]">{")"}</span>
          <span className="text-white">{" ;"}</span>
        </p>
      </div>
    </CodeBlock>
  );
}

export default Database;
