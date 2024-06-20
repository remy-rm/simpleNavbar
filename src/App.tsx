import React, { useEffect, useState } from 'react';
import {
  LuHome,
  LuContact,
  LuCandlestickChart,
  LuBookMarked,
  LuUser,
} from "react-icons/lu";

function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavVisible(
          currentScrollPos < 110 || (isScrollingUp && currentScrollPos > 110)
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navLinks = [
    {
      to: '/competence/',
      label: 'Compétence',
      icon: <LuCandlestickChart size={32} strokeWidth={0.75} />,
    },
    {
      to: '/portfolio/',
      label: 'Portfolio',
      icon: <LuBookMarked size={32} strokeWidth={0.75} />,
    },
    {
      to: '/Apropos/',
      label: 'A propos',
      icon: <LuUser size={32} strokeWidth={0.75} />,
    },
    {
      to: '/contact/',
      label: 'Contact',
      icon: <LuContact size={32} strokeWidth={0.75} />,
    },
    { to: '/',
      label: 'Accueil',
      icon: <LuHome size={32} strokeWidth={0.75} /> },
  ];

  return (
      <div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi felis, laoreet vel dignissim et, congue a nunc. Aliquam vitae feugiat eros. Pellentesque suscipit ipsum ut consequat finibus. Maecenas at lacus sit amet est egestas iaculis quis ac erat. Donec eu vulputate dui. Vivamus molestie non neque id tempus. Morbi consequat massa sit amet justo tempor gravida. Nullam purus elit, convallis eu fringilla eu, laoreet eget nisl. Proin a lectus eu neque vehicula consectetur non vitae erat. Nam nec aliquet tortor. In luctus aliquam sem eu convallis. Suspendisse et blandit mi, nec ornare diam. Praesent est odio, tincidunt at ante eget, consequat pretium ante. Donec porta justo enim, quis dictum ipsum rutrum et. Sed non tempor lacus.

          Nam dolor magna, finibus nec iaculis vitae, tincidunt eu elit. Vivamus bibendum blandit libero vel sagittis. Ut et placerat metus. Donec id leo eu sapien porttitor feugiat et non nulla. Maecenas magna enim, venenatis eget mauris eu, placerat accumsan augue. Integer egestas, est quis sollicitudin gravida, libero nibh sagittis lacus, vitae pulvinar sem quam eu metus. Vestibulum vel sem vitae lacus accumsan dapibus vitae sed risus. Donec suscipit aliquet leo, et semper ipsum molestie vel.

          Donec congue rhoncus lorem vitae lacinia. Pellentesque semper porta finibus. Aenean non pellentesque sem. Curabitur nec massa at nisi egestas tincidunt. In hac habitasse platea dictumst. Suspendisse in facilisis turpis, eget sollicitudin orci. Mauris lacinia ac erat quis tempus. Donec malesuada dui eget risus accumsan, quis mollis sapien ornare. Phasellus non ex interdum, tempor diam vitae, gravida sapien. Duis vitae imperdiet velit. Aenean egestas est nec mauris maximus consequat. Donec vitae lectus bibendum, commodo justo eget, vulputate turpis. Mauris in velit fringilla, fermentum odio id, tincidunt urna. Aliquam sed tortor suscipit, blandit ex quis, ullamcorper ex. Donec iaculis tortor vel ligula eleifend, commodo accumsan diam sollicitudin.

          Integer vitae nisl tellus. Duis a tortor eros. Vivamus sagittis lorem tellus, quis eleifend lorem dapibus a. Vivamus tincidunt, augue a euismod interdum, ligula purus tincidunt sem, in maximus magna nisl vitae ligula. In cursus vel erat et euismod. Nullam ultricies ligula id ante finibus, ac volutpat eros sagittis. Donec elementum sapien sed ultrices vehicula. Sed dignissim, turpis id faucibus cursus, ex sem semper metus, id eleifend mi lacus ut metus. Duis eget purus ex. Maecenas sollicitudin vitae orci at hendrerit. Curabitur vel mauris lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

          Etiam in interdum dolor. Aenean quis sem diam. Mauris sed velit nec ligula lacinia efficitur accumsan id felis. Pellentesque eget magna non dui finibus elementum ut sodales enim. Donec sagittis elementum elit, a sagittis elit ullamcorper eu. Vivamus hendrerit purus a leo vehicula bibendum. Pellentesque eu vehicula dolor. Donec vitae magna ullamcorper mauris eleifend commodo nec non risus. Nunc egestas ante ut tempor scelerisque. Nunc dictum nulla elit, quis pharetra mauris euismod efficitur. Fusce rutrum est dapibus hendrerit tempus. Pellentesque elit elit, molestie ac posuere ut, imperdiet ut mauris. Phasellus eget lectus fermentum, commodo orci non, egestas ipsum.

          Mauris porttitor egestas erat at varius. Fusce varius nisi metus, cursus hendrerit ex iaculis at. Aliquam nec diam id enim placerat ultricies a at nunc. Ut porta ligula dui, et fringilla velit convallis id. Praesent nec lectus eu neque accumsan commodo. Suspendisse dapibus dui sit amet ante ultricies, at aliquet erat tristique. Aenean maximus convallis massa, eu blandit ligula ullamcorper id. Duis mollis, massa id vulputate mollis, nisl risus faucibus mi, a iaculis quam orci nec quam. Mauris lobortis mi eget diam pulvinar varius.

          Integer fringilla ipsum nunc, sed efficitur lacus semper sodales. Ut ultricies mattis pharetra. Curabitur ex ligula, congue sit amet nisi et, luctus efficitur massa. Suspendisse at nulla vitae erat laoreet cursus. Morbi ac purus nunc. Vestibulum lacinia nibh consequat arcu tempor dignissim. Sed vel justo pharetra dui varius tempor. Nulla aliquam, lacus sed commodo molestie, tellus nulla dignissim ex, quis ornare ante dui posuere ligula. Suspendisse ultrices fringilla mi sed egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris dignissim laoreet nulla, sed laoreet dolor sollicitudin eu.

          Nullam in convallis dolor. Proin pulvinar velit a libero pellentesque, vitae dignissim augue pretium. Nullam aliquam, lorem sit amet tincidunt tristique, orci est venenatis enim, vel molestie nulla lectus sed eros. Nulla ac ante eu turpis blandit laoreet. Nulla lobortis rhoncus leo vel mattis. Suspendisse pellentesque est id tempus eleifend. Praesent aliquet dui sed justo volutpat malesuada. Integer ornare ipsum at pellentesque venenatis. Phasellus eleifend pulvinar eros ut placerat. Aenean volutpat mattis odio, et posuere metus tempor et. In semper porttitor risus, a pharetra velit maximus ac. Curabitur eu risus mollis, posuere eros vitae, efficitur dolor. Suspendisse eu volutpat leo, a mollis elit. Morbi at sollicitudin nulla. Donec congue laoreet eros vel placerat.

          Phasellus tristique enim sed velit posuere vestibulum. Duis vel sagittis lorem. Etiam dictum at mauris eu auctor. Integer dictum elit eu luctus viverra. Vestibulum ullamcorper mi id blandit dapibus. Curabitur ultrices, lectus a feugiat malesuada, leo felis interdum dolor, et sollicitudin lacus nunc id lorem. Morbi in consectetur orci, ut pharetra elit. Duis cursus velit quam. Aenean nisi velit, semper at gravida at, aliquam a neque. Donec in dui in lacus varius pulvinar. Aliquam non justo tempus, eleifend nibh sed, interdum neque. Cras vulputate pretium justo, imperdiet dapibus tortor aliquam non. Vivamus vitae lorem nisi.

          Nulla mattis tempor sodales. Phasellus sollicitudin magna nec arcu commodo, vel commodo mauris accumsan. Aliquam volutpat dictum quam sit amet malesuada. Integer id augue at quam molestie tincidunt. Nunc ac tellus vitae massa euismod lacinia non sed nisi. Donec pharetra felis quis fermentum maximus. Nulla semper et lectus non vehicula. Vestibulum ut mattis augue, sit amet venenatis massa.

          Duis interdum maximus eros, iaculis blandit ex maximus eu. Suspendisse eu arcu quis est porttitor mattis sit amet eu ex. Morbi rutrum velit at ipsum suscipit, ut mattis quam porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt quam mauris, id varius lectus malesuada ut. Aliquam vitae pellentesque nulla. Ut quis malesuada arcu, at malesuada ex. Phasellus pretium quam nec lorem convallis volutpat. Maecenas ut tellus erat. In lorem mi, maximus vel scelerisque vitae, tincidunt sed tellus. Donec facilisis varius urna, non vulputate neque dignissim eu. Aenean fringilla maximus turpis, eget interdum felis fermentum vitae. Nulla et massa sapien. Quisque consequat placerat diam.

          Suspendisse potenti. Fusce scelerisque, massa eu auctor mollis, neque velit ornare quam, ut blandit enim turpis vel eros. Sed volutpat odio eget dictum imperdiet. Curabitur tellus nunc, convallis sit amet pulvinar sit amet, dignissim sed augue. Ut sed magna et sapien venenatis eleifend at ac erat. Nam ut tristique quam, et fermentum elit. Praesent fringilla orci at elit vestibulum, mollis sagittis lectus facilisis. Maecenas egestas tempor dictum. Phasellus consequat orci nec odio ullamcorper, ut molestie quam eleifend. Cras eget leo ante. Aenean id molestie sem, sed rutrum magna. Etiam tempor, tortor eu laoreet elementum, diam justo viverra diam, id dapibus neque orci tempor mauris.

          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae interdum diam. Curabitur vitae erat eget erat facilisis iaculis. Quisque vehicula vehicula leo, quis eleifend erat elementum vitae. Aenean molestie pharetra tincidunt. Mauris venenatis vel augue ut tempus. Quisque viverra posuere mauris, a ultrices velit tristique a. Aenean ultricies sed purus sit amet maximus.

          Quisque posuere interdum velit, eleifend congue quam. Pellentesque ornare vel ipsum in aliquet. Suspendisse pellentesque orci neque, vestibulum luctus sapien vulputate at. Mauris semper arcu ut mollis finibus. Mauris vulputate imperdiet ullamcorper. Nulla fermentum nec justo eu cursus. In tincidunt, lacus sit amet pulvinar lacinia, eros tortor viverra justo, ac placerat nulla sapien sed libero. Mauris tristique erat vel ullamcorper consectetur.
        </div>
        <div className={'navBar'}>
          <nav className={isNavVisible ? 'visible' : 'hidden'}>
            <ul className="nav">
              {navLinks.map(({ to, label, icon }, index) => (
                  <li key={index} className="nav__btn">
                    <div className="nav__btn--icon">{icon}</div>
                    <p>{label}</p>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

  );
}

export default NavBar;
