import { IconTypes } from "@/types/types";
import Icon from "../icons/Icon";

export const Location = () => {
  return (
    <div className="flex gap-2 items-center footer-group">
      <Icon styles="w-5 h-5" src="Address" iconType={IconTypes.DefaultIcon} />
      <div className="font-Jura">
        <p className="my-1">Instituto de Ciências Exatas e Aplicadas - ICEA</p>
        <p className="my-1">
          Rua Trinta e Seis, Nº 115, Loanda - João Monlevade - MG
        </p>
      </div>
    </div>
  );
};

export const MediaSocial = () => {
  return (
    <div className="px-1 flex flex-col gap-2 items-center justify-center footer-group ">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <Icon styles="w-5 w-5" src="phone" iconType={IconTypes.DefaultIcon} />
          <p className="my-1">+55 31 3808-0833</p>
        </div>
        <div className="flex gap-2">
          <Icon styles="w-5 w-5" src="email" iconType={IconTypes.DefaultIcon} />
          <p className="my-1">coee@ufop.edu.br</p>
        </div>
      </div>
    </div>
  );
};

export const ComercialTime = () => {
  return (
    <div className="p-1 flex items-center gap-4 mt-2 bg-red">
      <Icon
        styles="w-5 w-5"
        src="Time Machine"
        iconType={IconTypes.DefaultIcon}
      />
      <div className="flex flex-col">
        <div className="mb-2 text-right">
          <p className="font-bold ">Atendimento Remoto</p>
          <p className="my-1">Segunda a sexta-feira, das 8h às 12h</p>
          <p className="my-1">Sexta-feira: 13h às 17h</p>
        </div>

        <div className="mb-2 text-right">
          <p className="font-bold ">Atendimento Presencial</p>
          <p className="my-1">Segunda a quinta-feira, das 14h às 18h</p>
        </div>
      </div>
    </div>
  );
};
