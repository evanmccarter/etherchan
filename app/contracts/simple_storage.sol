contract SimpleStorage
{
	uint public pstore;
	uint public gstore;
	uint public astore;
	uint public bstore;
	
	function SimpleStorage()
	{
	}
	
	function setpg(uint p, uint g)
	{
		pstore = p;
		gstore = g;
	}
	function getp() constant returns (uint p)
	{
		return pstore;
	}
	function getg() constant returns (uint g)
	{
		return gstore;
	}
	
	function seta(uint a)
	{
		astore = a;
	}
	
	function setb(uint b)
	{
		bstore = b;
	}
	
	function geta() constant returns (uint a)
	{
		return astore;
	}
	
	function getb() constant returns (uint b)
	{
		return bstore;
	}
}
