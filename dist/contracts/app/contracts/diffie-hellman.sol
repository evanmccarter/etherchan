contract DiffieHellman
{
	string public defaultp;
	string public defaultg;
	
	struct Connection
	{
		//variables for this connection
		string p;
		string g;
		
		//iv: to ensure there is no randomness in the eventual key generation
		string iv;
		
		
		//user-generated public information
		//a: from initiator
		string a;
		//b: from receiver
		string b;
		
		//A: encrypted secret of initiator
		string A;
		//B: encrypted secret of receiver
		string B;
	}
	
	mapping (address => mapping (address => Connection )) connections;
	
	
	
	function DiffieHellman(string p, string g)
	{
		defaultp = p;
		defaultg = g;
	}
	
	function startConnection(address receiver, string iv, string p, string g)
	{
		connections[receiver][msg.sender] = Connection(p, g, iv, "", "", "", "");
	}
	function startConnection(address receiver, string iv)
	{
		startConnection(receiver, iv, defaultp, defaultg);
	}
	
	//WARNING: DO NOT USE! likely any "random" number can be manipulated by miners
	//TODO: find random number generator in ethereum
	/*function startConnection(address receiver)
	{
		startConnection(receiver, <RANDOMNUMBER>);
	}/**/
	
	
	
	/*function seta(address receiver, string newa)
	{
		connections[receiver][msg.sender].a = newa;
	}
	/*
	function setb(address sender, string newb)
	{
		connections[msg.sender][sender].b = newb;
	}
	
	function getp(address receiver, address sender) constant returns (string p)
	{
		return connections[receiver][sender].p;
	}
	function getp(address receiver) constant returns (string p)
	{
		return getp(receiver, msg.sender);
	}
	
	function getg(address receiver, address sender) constant returns (string g)
	{
		return connections[receiver][sender].g;
	}
	function getg(address receiver) constant returns (string g)
	{
		return getg(receiver, msg.sender);
	}
	
	
	function geta(address sender, address receiver) constant returns (string a)
	{
		return connections[receiver][sender].a;
	}
	function geta(address receiver) constant  returns (string a)
	{
		return geta(msg.sender, receiver);
	}
	
	function getb(address sender, address receiver) constant  returns (string b)
	{
		return connections[receiver][sender].b;
	}
	function getb(address receiver) constant returns (string b)
	{
		return getb(msg.sender, receiver);
	}/**/
}
