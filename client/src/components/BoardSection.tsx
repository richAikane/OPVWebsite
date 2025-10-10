const boardMembers = [
  {
    name: "Nick Saumy",
    title: "Executive Director",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "Kumu Bradford Lum",
    title: "Director at Large",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "Michael Covert",
    title: "Director of Finance",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "Win Ye",
    title: "Director of Community Outreach",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "VACANT",
    title: "Director of Events",
    photo: null,
    isVacant: true,
  },
  {
    name: "Brandon Childress",
    title: "Director of Rules & Referees",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "Nic Zappardino",
    title: "Director at Large",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "Arthur Saumy",
    title: "Director of Operations",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
  },
  {
    name: "Alec Donnelly",
    title: "Director of Fields & Equipment",
    photo: "https://static.wixstatic.com/media/6ea41b_a3de0db39cea446eb064bcd00db5a2e2~mv2.png",
    isSingle: true,
  },
];

export default function BoardSection() {
  const regularMembers = boardMembers.filter(member => !member.isSingle);
  const singleMember = boardMembers.find(member => member.isSingle);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-normal text-gray-600" data-testid="heading-board">
            Board of Directors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {regularMembers.map((member, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 animate-fade-in-up ${
                member.isVacant ? 'opacity-60' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`board-member-${index}`}
            >
              <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-gray-100 bg-gray-50">
                {member.isVacant ? (
                  <div className="w-full h-full flex items-center justify-center text-3xl text-gray-600 font-bold">
                    ?
                  </div>
                ) : (
                  <img
                    src={member.photo || ''}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="text-lg text-gray-600 font-bold">{member.name}</div>
                <div className="text-sm text-gray-600">{member.title}</div>
              </div>
            </div>
          ))}
        </div>

        {singleMember && (
          <div className="flex justify-center">
            <div
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 w-full md:w-96 animate-fade-in-up"
              style={{ animationDelay: `${regularMembers.length * 100}ms` }}
              data-testid="board-member-single"
            >
              <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden border-2 border-gray-100">
                <img
                  src={singleMember.photo || ''}
                  alt={singleMember.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg text-gray-600 font-bold">{singleMember.name}</div>
                <div className="text-sm text-gray-600">{singleMember.title}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
